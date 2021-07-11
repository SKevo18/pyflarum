from typing import Literal, Optional, Union

from ...extensions import ExtensionMixin

from ...session import FlarumUser
from ...error_handler import parse_request

from pathlib import Path



class MailSettings(dict):
    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def id(self) -> Optional[str]:
        return self.data.get("id", None)


    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


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
    def mailgun_secret(self) -> Optional[str]:
        return self.mailgun.get("mail_mailgun_secret", None)


    @property
    def mailgun_domain(self) -> Optional[str]:
        return self.mailgun.get("mail_mailgun_domain", None)


    @property
    def log(self) -> list:
        return self.fields.get("log", [])


    @property
    def smtp(self) -> dict:
        return self.fields.get("smtp", {})


    @property
    def mail_host(self) -> Optional[str]:
        return self.smtp.get("mail_host", None)


    @property
    def mail_port(self) -> Optional[str]:
        return self.smtp.get("mail_port", None)


    @property
    def mail_encryption(self) -> Optional[str]:
        return self.smtp.get("mail_encryption", None)


    @property
    def mail_username(self) -> Optional[str]:
        return self.smtp.get("mail_username", None)


    @property
    def mail_password(self) -> Optional[str]:
        return self.smtp.get("mail_password", None)


    @property
    def sending(self) -> bool:
        return self.attributes.get("sending", False)


    @property
    def errors(self) -> list:
        return self.attributes.get("errors", [])



class AdminFlarumUserMixin(FlarumUser):
    def clear_cache(self):
        raw = self.session.delete(f"{self.api_urls['base']}/cache")
        parse_request(raw)

        return True


    def update_forum_info(self, forum_title: Optional[str]=None, forum_description: Optional[str]=None, welcome_title: Optional[str]=None, welcome_message: Optional[str]=None, user_slug_driver: Optional[Literal["", "default", "id"]]=None):
        post_data = {}


        if forum_title:
            post_data["forum_title"] = forum_title

        if forum_description:
            post_data["forum_description"] = forum_description

        if welcome_title:
            post_data["welcome_title"] = welcome_title

        if welcome_message:
            post_data["welcome_message"] = welcome_message

        if user_slug_driver:
            post_data["slug_driver_Flarum\\User\\User"] = user_slug_driver


        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True


    def get_mail_settings(self):
        raw = self.session.get(f"{self.api_urls['base']}/mail/settings")
        json = parse_request(raw)

        return MailSettings(json)


    def update_mail_settings(self, mail_from: Optional[str]=None, mail_encryption: Optional[str]=None, mail_username: Optional[str]=None, mail_password: Optional[str]=None):
        post_data = {}


        if mail_from:
            post_data["mail_from"] = mail_from

        if mail_encryption:
            post_data["mail_encryption"] = mail_encryption

        if mail_username:
            post_data["mail_username"] = mail_username

        if mail_password:
            post_data["mail_password"] = mail_password


        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True


    def send_test_mail(self):
        raw = self.session.post(f"{self.api_urls['base']}/mail/test")
        parse_request(raw)

        return True


    def update_appearance(self, theme_primary_color: Optional[str]=None, theme_secondary_color: Optional[str]=None, theme_dark_mode: Optional[bool]=None, theme_colored_header: bool=None):
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


    def upload_logo(self, logo_path: Union[str, bytes, Path], image_type: Literal['jpeg', 'png', 'jpg']='png'):
        with open(logo_path, 'rb') as logo_file:
            binary_logo = logo_file.read()

        raw = self.session.post(url=f"{self.api_urls['base']}/logo", json=dict(logo=binary_logo), headers={
            'Content-Type': f'image/{image_type}', 'Content-Disposition': f'form-data; name="logo"; filename="logo.{image_type}"'
        })
        parse_request(raw)

        return True


    def remove_logo(self):
        raw = self.session.delete(f"{self.api_urls['base']}/logo")
        parse_request(raw)

        return True


    def upload_favicon(self, favicon_path: Union[str, bytes, Path], image_type: Literal['jpeg', 'png', 'jpg', 'ico']='png'):
        with open(favicon_path, 'rb') as favicon_file:
            binary_favicon = favicon_file.read()

        raw = self.session.post(url=f"{self.api_urls['base']}/favicon", json=dict(favicon=binary_favicon), headers={
            'Content-Type': f'image/{image_type}', 'Content-Disposition': f'form-data; name="favicon"; filename="favicon.{image_type}"'
        })

        parse_request(raw)

        return True


    def remove_favicon(self):
        raw = self.session.delete(f"{self.api_urls['base']}/favicon")
        parse_request(raw)

        return True


    def update_custom_header(self, header: Optional[str]=None):
        post_data = {
            "custom_header": (header if header else "")
        }

        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True


    def update_custom_footer(self, footer: Optional[str]=None):
        post_data = {
            "custom_css": (footer if footer else "")
        }

        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True


    def update_custom_css(self, css: Optional[str]=None):
        post_data = {
            "custom_css": (css if css else "")
        }

        raw = self.session.post(f"{self.api_urls['base']}/settings", json=post_data)
        parse_request(raw)

        return True



class AdminExtension(ExtensionMixin, AdminFlarumUserMixin):
    def mixin(self):
        super().mixin(self, FlarumUser, AdminFlarumUserMixin)
