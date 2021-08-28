Module pyflarum.extensions
==========================

Sub-modules
-----------
* pyflarum.extensions.absolutely_all
* pyflarum.extensions.admin
* pyflarum.extensions.advanced_search
* pyflarum.extensions.commands
* pyflarum.extensions.flarum
* pyflarum.extensions.watch

Classes
-------

`ExtensionMixin()`
:   A base class for mixing in custom classes (extensions) into another classes.
    
    ### Example extension code:
    ```python
    
    from pyflarum.extensions import ExtensionMixin
    from pyflarum.extensions.admin import AdminExtension
    from pyflarum.session import FlarumUser
    
    
    # Lowecase:
    AUTHOR = "yourname"
    NAME = "extensionname"
    ID = f"{AUTHOR}-{NAME}"
    
    # List of dependencies:
    SOFT_DEPENDENCIES = [AdminExtension] # uses methods from this extension, but can run without it
    HARD_DEPENCENDIES = []
    
    
    
    # I recommend to use the following naming pattern: `<YourExtensionName><ClassToMixin>Mixin`
    # Example:
    class ExampleFlarumUserMixin(FlarumUser):
        @property
        def example(self):
            '''
                Calling `FlarumUser(<...>).example` would return this.
            '''
    
            return "Example"
    
    
    class ExampleExtension(ExtensionMixin):
        def get_dependencies(self):
            return {
                "soft": SOFT_DEPENDENCIES,
                "hard": HARD_DEPENCENDIES
            }
    
    
        def mixin(self):
            super().mixin(self, FlarumUser, ExampleFlarumUserMixin)
    
    ```

    ### Descendants

    * pyflarum.extensions.absolutely_all.AbsolutelyAllExtension
    * pyflarum.extensions.admin.AdminExtension
    * pyflarum.extensions.advanced_search.AdvancedSearchExtension
    * pyflarum.extensions.commands.CommandsExtension
    * pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension
    * pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension
    * pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension
    * pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension
    * pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension
    * pyflarum.extensions.flarum.Flarum_Likes.LikesExtension
    * pyflarum.extensions.flarum.Flarum_Lock.LockExtension
    * pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyExtension
    * pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension
    * pyflarum.extensions.flarum.Flarum_Suspend.SuspendExtension
    * pyflarum.extensions.flarum.Flarum_Tags.TagsExtension
    * pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension
    * pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension
    * pyflarum.extensions.flarum.FoF_Merge.MergeExtension
    * pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension
    * pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension
    * pyflarum.extensions.flarum.FoF_Split.SplitExtension
    * pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension
    * pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension
    * pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension
    * pyflarum.extensions.watch.WatchExtension

    ### Methods

    `get_dependencies(self) ‑> Dict[str, List[object]]`
    :   This should return the following `dict`:
        ```python
        {
            "hard": [<class>, <class>, ...],
            "soft": [<class>, <class>, ...]
        }
        ```
        
        A dependency is anything that you can pass into `FlarumUser(extensions=[...])` (e. g. an extension class).
        
        #### Hard-dependencies:
        - Will raise an error when they're not found in the initialized `FlarumUser` object. It is impossible for the extension
        to function without these.
        
        #### Soft-dependencies:
        - Will raise just a warning. It is possible for the extension to function without these, although with limitations
        (such that some functions might be unavailable).

    `mixin(_, class_to_patch: object, class_to_mix_in: object, skip_protected: bool = True)`
    :   A function to mix-in/merge properties, methods, functions, etc... of one class into another.
        
        This skips all functions and properties starting with `__` (double underscore), unless `skip_protected` is False.
        
        This sets/overwrites attributes of `class_to_patch` to attributes of
        `class_to_mix_in` (monkey-patch).
        
        ### Example:
        ```python
        extension.mixin(myclass, pyflarum_class)
        ```