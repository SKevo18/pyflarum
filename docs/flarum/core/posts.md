Module pyflarum.flarum.core.posts
=================================

Classes
-------

`Post(user: FlarumUser, _fetched_data: dict)`
:   A Flarum post.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.posts.PostFromNotification
    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

    `canHide: bool`
    :   Whether or not you are able to hide this post.

    `content: Optional[str]`
    :   The post's content. Doesn't contain markdown, and is just plain-text.
        
        Only available in `pyflarum.flarum.core.posts.PostFromNotification`.

    `contentHtml: Optional[str]`
    :   The HTML content of the post.

    `contentType: Optional[str]`
    :   Post's content type. This is usually a `comment` for user-made posts,
        but this can differ if it's actually a message that a post's tags changed, or
        the discussion got moved elsewhere (these messages are treated as posts too by Flarum)

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this post created.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `editedAt: Optional[datetime.datetime]`
    :   The `datetime` when was this post edited at.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `ipAddress: Optional[str]`
    :   The post's IP address.
        
        Returns `None` if you don't have the permissions to view IP address
        of the post.

    `number: Optional[int]`
    :   The post's number/order in the discussion.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   The post's URL.

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_data: pyflarum.flarum.core.posts.PreparedPost)`
    :   Edits the post. The new post should be a `PreparedPost` object.

    `get_author(self)`
    :   Obtains the post's author.
        
        Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
        JSON data is the same.

    `get_discussion(self)`
    :   Obtains the discussion of the post.
        
        Returns `pyflarum.flarum.core.discussions.DiscussionFromNotification`, because its
        JSON data matches.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `reply_to(self, post: pyflarum.flarum.core.posts.PreparedPost)`
    :   Replies to this `Post` with another `PreparedPost`.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

`PostFromBulk(user: FlarumUser, _fetched_data: dict)`
:   A post from `Posts`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.posts.PostFromNotification
    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

    `canHide: bool`
    :   Whether or not you are able to hide this post.

    `content: NotImplemented`
    :   This property is only available for `pyflarum.flarum.core.posts.PostFromNotification`, but
        was included here due to class inheritance.
        
        Using this will just raise `NotImplementedError`, so please do not use this.

    `contentHtml: Optional[str]`
    :   The HTML content of the post.

    `contentType: Optional[str]`
    :   Post's content type. This is usually a `comment` for user-made posts,
        but this can differ if it's actually a message that a post's tags changed, or
        the discussion got moved elsewhere (these messages are treated as posts too by Flarum)

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this post created.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `editedAt: Optional[datetime.datetime]`
    :   The `datetime` when was this post edited at.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `ipAddress: Optional[str]`
    :   The post's IP address.
        
        Returns `None` if you don't have the permissions to view IP address
        of the post.

    `number: Optional[int]`
    :   The post's number/order in the discussion.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   The post's URL.

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_data: pyflarum.flarum.core.posts.PreparedPost)`
    :   Edits the post. The new post should be a `PreparedPost` object.

    `get_author(self)`
    :   Obtains the post's author.
        
        Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
        JSON data is the same.

    `get_discussion(self)`
    :   Obtains the discussion of the post.
        
        Returns `pyflarum.flarum.core.discussions.DiscussionFromNotification`, because its
        JSON data matches.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `reply_to(self, post: pyflarum.flarum.core.posts.PreparedPost)`
    :   Replies to this `Post` with another `PreparedPost`.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

`PostFromDiscussion(user: FlarumUser, _fetched_data: dict)`
:   A post from `Discussion`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin
    * pyflarum.flarum.core.posts.PostFromNotification

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `contentHtml: Optional[str]`
    :   The HTML content of the post.

    `contentType: Optional[str]`
    :   Post's content type. This is usually a `comment` for user-made posts,
        but this can differ if it's actually a message that a post's tags changed, or
        the discussion got moved elsewhere (these messages are treated as posts too by Flarum)

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this post created.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `number: Optional[int]`
    :   The post's number/order in the discussion.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_post: pyflarum.flarum.core.posts.PreparedPost) ‑> pyflarum.flarum.core.posts.Post`
    :   Edits the post.
        
        `new_post` has to be a `PreparedPost` object. Returns the `Post` after edit.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

`PostFromNotification(user: FlarumUser, _fetched_data: dict)`
:   A post from `Notification`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin
    * pyflarum.flarum.core.posts.Post
    * pyflarum.flarum.core.posts.PostFromBulk

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

    `canHide: bool`
    :   Whether or not you are able to hide this post.

    `content: Optional[str]`
    :   The post's content. Doesn't contain markdown, and is just plain-text.
        
        Only available in `pyflarum.flarum.core.posts.PostFromNotification`.

    `contentHtml: Optional[str]`
    :   The HTML content of the post.

    `contentType: Optional[str]`
    :   Post's content type. This is usually a `comment` for user-made posts,
        but this can differ if it's actually a message that a post's tags changed, or
        the discussion got moved elsewhere (these messages are treated as posts too by Flarum)

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this post created.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `editedAt: Optional[datetime.datetime]`
    :   The `datetime` when was this post edited at.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `ipAddress: Optional[str]`
    :   The post's IP address.
        
        Returns `None` if you don't have the permissions to view IP address
        of the post.

    `number: Optional[int]`
    :   The post's number/order in the discussion.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   The post's URL.

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_data: pyflarum.flarum.core.posts.PreparedPost)`
    :   Edits the post. The new post should be a `PreparedPost` object.

    `get_author(self)`
    :   Obtains the post's author.
        
        Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
        JSON data is the same.

    `get_discussion(self)`
    :   Obtains the discussion of the post.
        
        Returns `pyflarum.flarum.core.discussions.DiscussionFromNotification`, because its
        JSON data matches.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `reply_to(self, post: pyflarum.flarum.core.posts.PreparedPost)`
    :   Replies to this `Post` with another `PreparedPost`.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

`Posts(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple posts fetched from `/api/posts`.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumBulkObject
    * builtins.list

    ### Instance variables

    `first_link: Optional[str]`
    :   First link in the API.

    `next_link: Optional[str]`
    :   Next link in the API.

    `previous_link: Optional[str]`
    :   Previous link in the API.

`PreparedPost(user: FlarumUser, discussion: Optional[ForwardRef('AnyDiscussion')] = None, content: Optional[str] = None)`
:   A prepared post that can be sent to the API.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object that will create the post
    (see `PreparedPost.post()`).
    - `discussion` - any discussion that the post belongs to.
    - `content` - the post's content. You can use the traditional Flarum's markdown syntax.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `to_dict: dict`
    :   Converts the post to a `dict`, so that
        it can be sent to the API.
        
        An extension might add additional data during runtime. This is the
        most basic template that Flarum requires when creating a post.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `create(self)`
    :   Posts/creates the post. Raises `FlarumError` on error, otherwise it returns the created `Post`.

    `post(self)`
    :   Posts/creates the post. Raises `FlarumError` on error, otherwise it returns the created `Post`.