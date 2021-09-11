import typing as t
if t.TYPE_CHECKING:
    from ...session import FlarumUser
    from ...custom_types import AnyFlarumClass



class BaseFlarumObject(dict):
    """
        The base Flarum object - all API objects have properties of this object.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        """
            ### Parameters:
            - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
            - `_fetched_data` - the JSON data that was fetched from the API.

            I strongly discourage from forging objects this way, unless you are creating an extension.
        """

        self.user = user
        super().__init__(_fetched_data)


    @property
    def data(self) -> t.Union[t.List[dict], dict]:
        """
            A raw `dict` of the object's data.
        """

        return self.get("data", {})



class BaseFlarumBulkObject(list):
    """
        The base object for Flarum "bulk" objects - all API objects
        that contain other objects have these properties.

        Examples of bulk objects:
        - `pyflarum.flarum.core.users.UserFromBulk`
        - `pyflarum.flarum.core.discussions.DiscussionFromBulk`
        - `pyflarum.flarum.core.posts.PostFromBulk`
    """


    def __init__(self, user: 'FlarumUser', _fetched_data: dict, _listclass: 'AnyFlarumClass', _required_type: str):
        self.links = _fetched_data.get("links", {}) # type: dict
        self.included = _fetched_data.get("included", [{}]) # type: t.List[dict]

        self.user = user
        converted = [_listclass(user=user, _fetched_data=dict(data=data, _parent_included=self.included)) for data in _fetched_data.get("data", []) if data.get("type", _required_type) == _required_type]
        super().__init__(converted)


    @property
    def first_link(self) -> t.Optional[str]:
        """
            First link in the API.
        """

        return self.links.get("first", None)


    @property
    def previous_link(self) -> t.Optional[str]:
        """
            Previous link in the API.
        """

        return self.links.get("prev", None)


    @property
    def next_link(self) -> t.Optional[str]:
        """
            Next link in the API.
        """

        return self.links.get("next", None)


    if t.TYPE_CHECKING:
        @property
        def included(self) -> t.List[dict]:
            """
                Returns raw list of JSON included data.

                Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)
            """
            ...


        @property
        def links(self) -> dict:
            """
                Returns raw list of API links.
            """
            ...



class BaseFlarumIndividualObject(BaseFlarumObject):
    """
        Base object for Flarum "individual" objects - all
        objects have these properties.

        Examples of "individual" objects:
        - `pyflarum.flarum.core.discussions.Discussion`
        - `pyflarum.flarum.core.posts.Post`
        - `pyflarum.flarum.core.PostFromDiscussion`
    """

    @property
    def type(self) -> t.Optional[str]:
        """
            The type of the object.
            
            This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...
        """

        return self.data.get("type", None)


    @property
    def id(self) -> t.Optional[int]:
        """
            The `int` ID of the object. This should always be unique for the object's type.
        """

        raw = self.data.get("id", None)

        if raw:
            return int(raw)


    @property
    def attributes(self) -> dict:
        """
            Raw `dict` of the object's attributes.
        """

        return self.data.get("attributes", {})


    @property
    def relationships(self) -> dict:
        """
            Raw `dict` of the object's relationships with
            other objects.

            This contains references to objects in the included data.
            Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).
        """

        return self.data.get("relationships", {})


    @property
    def included(self) -> t.List[dict]:
        """
            Returns raw list of JSON included data.

            Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).

            Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).
        """

        return self.get("included", {})


    @property
    def _parent_included(self) -> t.List[dict]:
        """
            Raw data of the parent's included JSON data.

            Returns empty `list` of empty `dict` if there is no parent data.

            Read more about [_parent_included](https://cwkevo.github.io/pyflarum/docs/#parent-included).
        """

        return self.get("_parent_included", [{}])
