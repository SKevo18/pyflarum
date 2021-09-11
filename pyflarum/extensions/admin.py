import typing as t

from ..extensions import ExtensionMixin

from ..session import FlarumUser
from ..flarum.core import BaseFlarumIndividualObject
from ..error_handler import parse_request


AUTHOR = 'skevo'
NAME = 'admin'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class MailSettings(BaseFlarumIndividualObject):
    @property
    def fields(self) -> dict:
        return self.attributes.get("fields", {})


    @property
    def mail(self) -> list:
        return self.fields.get("mail", [])


    @property
    def mailgun(self) -> dict:
        return self.fields.get("mailgun", {})


    @property
    def mailgun_secret(self) -> t.Optional[str]:
        return self.mailgun.get("mail_mailgun_secret", None)


    @property
    def mailgun_domain(self) -> t.Optional[str]:
        return self.mailgun.get("mail_mailgun_domain", None)


    @property
    def log(self) -> list:
        return self.fields.get("log", [])


    @property
    def smtp(self) -> dict:
        return self.fields.get("smtp", {})


    @property
    def mail_host(self) -> t.Optional[str]:
        return self.smtp.get("mail_host", None)


    @property
    def mail_port(self) -> t.Optional[str]:
        return self.smtp.get("mail_port", None)


    @property
    def mail_encryption(self) -> t.Optional[str]:
        return self.smtp.get("mail_encryption", None)


    @property
    def mail_username(self) -> t.Optional[str]:
        return self.smtp.get("mail_username", None)


    @property
    def mail_password(self) -> t.Optional[str]:
        return self.smtp.get("mail_password", None)


    @property
    def sending(self) -> bool:
        return self.attributes.get("sending", False)


    @property
    def errors(self) -> list:
        return self.attributes.get("errors", [])



class AdminFlarumUserMixin(FlarumUser):
    def __enable_or_disable_extension(self, id: 'str | int', enabled: bool=True) -> 't.Literal[True]':
        raw = self.session.patch(f"{self.api_urls['extensions']}/{id}", json={"enabled": enabled})
        parse_request(raw)

        return True


    def enable_extension(self, id: 'str | int') -> 't.Literal[True]':
        return self.__enable_or_disable_extension(id=id, enabled=True)


    def disable_extension(self, id: 'str | int') -> 't.Literal[True]':
        return self.__enable_or_disable_extension(id=id, enabled=False)


    def clear_cache(self) -> 't.Literal[True]':
        raw = self.session.delete(f"{self.api_urls['base']}/cache")
        parse_request(raw)

        return True


    def update_forum_info(self, forum_title: t.Optional[str]=None, forum_description: t.Optional[str]=None, default_route: t.Optional[str]=None, welcome_title: t.Optional[str]=None, welcome_message: t.Optional[str]=None, user_slug_driver: t.Optional['t.Literal["default", "id"]']=None) -> 't.Literal[True]':
        post_data = {}


        if forum_title:
            post_data["forum_title"] = forum_title

        if forum_description:
            post_data["forum_description"] = forum_description

        if default_route:
            post_data["default_route"] = default_route

        if welcome_title:
            post_data["welcome_title"] = welcome_title

        if welcome_message:
            post_data["welcome_message"] = welcome_message

        if user_slug_driver is not None:
            post_data["slug_driver_Flarum\\User\\User"] = user_slug_driver


        return self.__update_settings(post_data)


    def get_mail_settings(self) -> MailSettings:
        raw = self.session.get(f"{self.api_urls['base']}/mail/settings")
        json = parse_request(raw)

        return MailSettings(json)


    def update_mail_settings(self, mail_from: t.Optional[str]=None, mail_encryption: t.Optional[str]=None, mail_username: t.Optional[str]=None, mail_password: t.Optional[str]=None):
        post_data = {}


        if mail_from:
            post_data["mail_from"] = mail_from

        if mail_encryption:
            post_data["mail_encryption"] = mail_encryption

        if mail_username:
            post_data["mail_username"] = mail_username

        if mail_password:
            post_data["mail_password"] = mail_password


        return self.__update_settings(post_data)


    def send_test_mail(self) -> 't.Literal[True]':
        raw = self.session.post(f"{self.api_urls['base']}/mail/test")
        parse_request(raw)

        return True


    def update_appearance(self, theme_primary_color: t.Optional[str]=None, theme_secondary_color: t.Optional[str]=None, theme_dark_mode: t.Optional[bool]=None, theme_colored_header: bool=None) -> 't.Literal[True]':
        post_data = {}


        if theme_primary_color:
            post_data["theme_primary_color"] = theme_primary_color

        if theme_secondary_color:
            post_data["theme_secondary_color"] = theme_secondary_color

        if isinstance(theme_dark_mode, bool):
            post_data["theme_dark_mode"] = theme_dark_mode

        if isinstance(theme_colored_header, bool):
            post_data["theme_colored_header"] = theme_colored_header


        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True


    def upload_logo(self, file: t.BinaryIO, file_name: str="logo", file_type: 't.Literal["image/png", "image/jpeg", "image/gif"]'="image/png") -> 't.Literal[True]':
        raw = self.session.post(url=f"{self.api_urls['base']}/logo", files={ "logo": (file_name, file, file_type) })

        parse_request(raw)

        return True


    def remove_logo(self) -> 't.Literal[True]':
        raw = self.session.delete(f"{self.api_urls['base']}/logo")
        parse_request(raw)

        return True


    def upload_favicon(self, file: t.BinaryIO, file_name: str="favicon", file_type: 't.Literal["image/png", "image/jpeg", "image/gif"]'="image/png") -> 't.Literal[True]':
        raw = self.session.post(url=f"{self.api_urls['base']}/favicon", files={ "favicon": (file_name, file, file_type) })

        parse_request(raw)

        return True


    def remove_favicon(self) -> 't.Literal[True]':
        raw = self.session.delete(f"{self.api_urls['base']}/favicon")
        parse_request(raw)

        return True


    def update_custom_header(self, header: t.Optional[str]=None) -> 't.Literal[True]':
        return self.__update_settings({ "custom_header": header if header else "" })


    def update_custom_footer(self, footer: t.Optional[str]=None) -> 't.Literal[True]':
        return self.__update_settings({ "custom_footer": footer if footer else "" })


    def update_custom_css(self, css: t.Optional[str]=None) -> 't.Literal[True]':
        return self.__update_settings({ "custom_header": css if css else "" })


    def __update_settings(self, data: dict) -> 't.Literal[True]':
        raw = self.session.post(f"{self.api_urls['base']}/settings", json=data)
        parse_request(raw)

        return True



class AdminExtension(ExtensionMixin, AdminFlarumUserMixin):
    def __init__(self):
        self.name = NAME
        self.author = AUTHOR
        self.id = ID

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumUser, AdminFlarumUserMixin)
