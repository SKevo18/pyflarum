class FlarumForum(dict):
    def __init__(self, *args, **kwargs):
        dict.__init__(self, *args, **kwargs)


    # Main:
    @property
    def id(self) -> str:
        try:
            return self['data']['id']
        except KeyError:
            return None

    @property
    def type(self) -> str:
        try:
            return self['data']['type']
        except KeyError:
            return None


    # Attributes:
    @property
    def title(self) -> str:
        try:
            return self['data']['attributes']['title']
        except KeyError:
            return None

    @property
    def description(self) -> str:
        try:
            return self['data']['attributes']['description']
        except KeyError:
            return None

    @property
    def showLanguageSelector(self) -> bool:
        try:
            return self['data']['attributes']['showLanguageSelector']
        except KeyError:
            return None

    @property
    def baseUrl(self) -> str:
        try:
            return self['data']['attributes']['base_url']
        except KeyError:
            return None

    @property
    def basePath(self) -> str:
        try:
            return self['data']['attributes']['basePath']
        except KeyError:
            return None

    @property
    def debug(self) -> bool:
        try:
            return self['data']['attributes']['debug']
        except KeyError:
            return None

    @property
    def apiUrl(self) -> str:
        try:
            return self['data']['attributes']['apiUrl']
        except KeyError:
            return None

    @property
    def welcomeTitle(self) -> str:
        try:
            return self['data']['attributes']['welcomeTitle']
        except KeyError:
            return None

    @property
    def welcomeMessage(self) -> str:
        try:
            return self['data']['attributes']['welcomeMessage']
        except KeyError:
            return None

    @property
    def themePrimaryColor(self) -> str:
        try:
            return self['data']['attributes']['themePrimaryColor']
        except KeyError:
            return None

    @property
    def themeSecondaryColor(self) -> str:
        try:
            return self['data']['attributes']['themeSecondaryColor']
        except KeyError:
            return None

    @property
    def logoUrl(self) -> str:
        try:
            return self['data']['attributes']['logoUrl']
        except KeyError:
            return None

    @property
    def faviconUrl(self) -> str:
        try:
            return self['data']['attributes']['faviconUrl']
        except KeyError:
            return None

    @property
    def headerHtml(self) -> str:
        try:
            return self['data']['attributes']['headerHtml']
        except KeyError:
            return None

    @property
    def footerHtml(self) -> str:
        try:
            return self['data']['attributes']['footerHtml']
        except KeyError:
            return None

    @property
    def allowSignUp(self) -> bool:
        try:
            return self['data']['attributes']['allowSignUp']
        except KeyError:
            return None

    @property
    def defaultRoute(self) -> str:
        try:
            return self['data']['attributes']['defaultRoute']
        except KeyError:
            return None

    # Permissions:
    @property
    def canViewDiscussions(self) -> bool:
        try:
            return self['data']['attributes']['canViewDiscussions']
        except KeyError:
            return None

    @property
    def canStartDiscussions(self) -> bool:
        try:
            return self['data']['attributes']['canStartDiscussions']
        except KeyError:
            return None

    @property
    def canViewUserList(self) -> bool:
        try:
            return self['data']['attributes']['canViewUserList']
        except KeyError:
            return None

    @property
    def canViewFlags(self) -> bool:
        try:
            return self['data']['attributes']['canViewFlags']
        except KeyError:
            return None

    @property
    def guidelinesUrl(self) -> str:
        try:
            return self['data']['attributes']['guidelinesUrl']
        except KeyError:
            return None

    @property
    def minPrimaryTags(self) -> int:
        try:
            return self['data']['attributes']['minPrimaryTags']
        except KeyError:
            return None

    @property
    def maxPrimaryTags(self) -> int:
        try:
            return self['data']['attributes']['maxPrimaryTags']
        except KeyError:
            return None

    @property
    def minSecondaryTags(self) -> int:
        try:
            return self['data']['attributes']['minSecondaryTags']
        except KeyError:
            return None

    @property
    def maxSecondaryTags(self) -> int:
        try:
            return self['data']['attributes']['maxSecondaryTags']
        except KeyError:
            return None

    @property
    def canSaveDrafts(self) -> bool:
        try:
            return self['data']['attributes']['canSaveDrafts']
        except KeyError:
            return None

    @property
    def canScheduleDrafts(self) -> bool:
        try:
            return self['data']['attributes']['canScheduleDrafts']
        except KeyError:
            return None

    @property
    def canSelectBestAnswerOwnPost(self) -> bool:
        try:
            return self['data']['attributes']['canSelectBestAnswerOwnPost']
        except KeyError:
            return None

    @property # TODO: Move to extensions
    def maxUserBioLength(self) -> int:
        try:
            return self['data']['attributes']['fof-user-bio.maxLength']
        except KeyError:
            return None

    @property
    def canRequestUsername(self) -> bool:
        try:
            return self['data']['attributes']['canRequestUsername']
        except KeyError:
            return None

    @property
    def canRequestNickname(self) -> bool:
        try:
            return self['data']['attributes']['canRequestNickname']
        except KeyError:
            return None
