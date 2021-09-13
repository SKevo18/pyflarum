import typing as t


from ..core import BaseFlarumIndividualObject
from ..core.groups import Group


class Forum(BaseFlarumIndividualObject):
    """
        Entire forum, lives under the main `/api` route.
    """


    @property
    def title(self) -> t.Optional[str]:
        """
            The forum's title.
        """

        return self.attributes.get("title", None)


    @property
    def description(self) -> t.Optional[str]:
        """
            The description of the forum.
        """

        return self.attributes.get("description", None)


    @property
    def showLanguageSelector(self) -> bool:
        """
            Whether or not the language selector is available.
        """

        return self.attributes.get("showLanguageSelector", False)


    @property
    def baseUrl(self) -> t.Optional[str]:
        """
            Base URL of the forum/where the forum is located at.
        """

        return self.attributes.get("baseUrl", None)


    @property
    def basePath(self) -> t.Optional[str]:
        """
            Base path to the forum.
        """

        return self.attributes.get("basePath", None)


    @property
    def debug(self) -> bool:
        """
            Whether or not debug mode is enabled.
        """

        return self.attributes.get("debug", False)


    @property
    def apiUrl(self) -> t.Optional[str]:
        """
            The API URL of the forum.
        """

        return self.attributes.get("apiUrl", None)


    @property
    def welcomeTitle(self) -> t.Optional[str]:
        """
            The title of the welcome message box of the forum.
        """

        return self.attributes.get("welcomeTitle", None)


    @property
    def welcomeMessage(self) -> t.Optional[str]:
        """
            The welcome message of the forum (shown in the welcome box).
        """

        return self.attributes.get("welcomeMessage", None)


    @property
    def themePrimaryColor(self) -> t.Optional[str]:
        """
            Forum's primary color in HEX format.
        """

        return self.attributes.get("themePrimaryColor", None)


    @property
    def themeSecondaryColor(self) -> t.Optional[str]:
        """
            Forum's secondary color in HEX format.
        """

        return self.attributes.get("themeSecondaryColor", None)


    @property
    def logoUrl(self) -> t.Optional[str]:
        """
            URL to forum's logo.
        """

        return self.attributes.get("logoUrl", None)


    @property
    def faviconUrl(self) -> t.Optional[str]:
        """
            URL to forum's favicon.
        """

        return self.attributes.get("faviconUrl", None)


    @property
    def headerHtml(self) -> t.Optional[str]:
        """
            The header HTML of the forum.
        """

        return self.attributes.get("headerHtml", None)


    @property
    def footerHtml(self) -> t.Optional[str]:
        """
            The footer HTML of the forum.
        """

        return self.attributes.get("footerHtml", None)


    @property
    def allowSignUp(self) -> bool:
        """
            Whether or not signup is allowed.
        """

        return self.attributes.get("allowSignUp", False)


    @property
    def defaultRoute(self) -> t.Optional[str]:
        """
            The homepage of the forum (default route)
        """

        return self.attributes.get("defaultRoute", None)


    @property
    def canViewForum(self) -> bool:
        """
            Whether or not you are allowed to view the forum.
        """

        return self.attributes.get("canViewForum", False)


    @property
    def canStartDiscussion(self) -> bool:
        """
            Whether or not you are allowed to start a discussion.
        """

        return self.attributes.get("canStartDiscussion", False)


    @property
    def canSearchUsers(self) -> bool:
        """
            Whether or not you are able to search for users.
        """

        return self.attributes.get("canSearchUsers", False)


    @property
    def adminUrl(self) -> t.Optional[str]:
        """
            The administration panel URL of the forum.
        """

        return self.attributes.get("adminUrl", None)


    @property
    def version(self) -> t.Optional[str]:
        """
            The Flarum version this forum is running on.
        """

        return self.attributes.get("version", None)


    @property
    def allowUsernameMentionFormat(self) -> bool:
        return self.attributes.get("allowUsernameMentionFormat", False)


    def get_groups(self) -> t.List[Group]:
        """
            Obtains the forum groups.

            Returns a list of `Group` objects.
        """

        all_groups = list()

        for raw_group in self.relationships.get("groups", {}).get("data", [{}]):
            if raw_group.get("type", None) == 'groups':
                group = Group(user=self.user, _fetched_data=dict(data=raw_group))

                all_groups.append(group)

        return all_groups


    # Required: `Forum` is not a standard bulk route, so we can't inherit from that.
    @property
    def included(self) -> t.List[dict]:
        """
            Returns raw list of JSON included data.

            Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)
        """

        return self.get("included", [{}])
