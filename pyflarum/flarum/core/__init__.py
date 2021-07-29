from typing import List, Optional, Union, TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser



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
    def data(self) -> Union[List[dict], dict]:
        """
            A raw `dict` of the object's data.
        """

        return self.get("data", [{}])



class BaseFlarumBulkObject(BaseFlarumObject):
    """
        The base object for Flarum "bulk" objects - all API objects
        that contain other objects have these properties.

        Examples of bulk objects:
        - `pyflarum.flarum.core.users.UserFromBulk`
        - `pyflarum.flarum.core.discussions.DiscussionFromBulk`
        - `pyflarum.flarum.core.posts.PostFromBulk`
    """

    @property
    def links(self) -> dict:
        """
            A raw `dict` of the object's API links.
        """

        return self.get("links", {})


    @property
    def first_link(self) -> Optional[str]:
        """
            First link in the API.
        """

        return self.links.get("first", None)


    @property
    def previous_link(self) -> Optional[str]:
        """
            Previous link in the API.
        """

        return self.links.get("prev", None)


    @property
    def next_link(self) -> Optional[str]:
        """
            Next link in the API.
        """

        return self.links.get("next", None)


    @property
    def included(self) -> List[dict]:
        """
            Raw `dict` of the object's included data.
        """

        return self.get("included", [{}])



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
    def type(self) -> Optional[str]:
        """
            The type of the object.
            
            This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...
        """

        return self.data.get("type", None)


    @property
    def id(self) -> Optional[int]:
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
    def _parent_included(self) -> List[dict]:
        """
            Raw data of the parent's included JSON data.

            Returns empty `list` of empty `dict` if there is no parent data.

            Read more about [_parent_included](https://cwkevo.github.io/pyflarum/docs/#parent-included).
        """

        return self.get("_parent_included", [{}])
