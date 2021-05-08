class FlarumUser(dict):
    """
        A Flarum user.
    """

    @property
    def data(self) -> dict:
        """A raw `dict` of user's data."""
        return self.get("data", {})

    @property
    def id(self) -> int:
        """The user's ID."""
        return self.data.get("id", 0)

    @property
    def type(self) -> str:
        """The user's type. Should always be '`users`'."""
        return self.data.get("type", "users")


    @property
    def attributes(self) -> dict:
        """A raw `dict` of user's attributes."""
        return self.data.get("attributes", {})


    @property
    def username(self) -> str:
        """The user's username."""
        return self.attributes.get("username", None)


    @property
    def displayName(self) -> str:
        """The user's display name."""
        return self.attributes.get("displayName", None)


    @property
    def avatarURL(self) -> str:
        """The URL of user's avatar."""
        return self.attributes.get("avatarUrl", None)


    @property
    def slug(self) -> str:
        """The user's slug."""
        return self.attributes.get("slug", None)
