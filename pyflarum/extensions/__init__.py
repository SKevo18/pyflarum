from typing import Dict, List


class ExtensionMixin:
    """
        A base class for mixing in custom classes (extensions) into another classes.

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
            def __example(self):
                '''
                    Calling `FlarumUser(<...>).__example` would return this.
                '''

                return "Example"



        class ExampleExtension(ExtensionMixin):
            def get_dependencies(self):
                '''
                    Overwrite this method to make your own dependencies.

                    This should return the following `dict`:
                    ```python
                    {
                        "hard": [<class>, <class>, ...],
                        "soft": [<class>, <class>, ...]
                    }
                    ```

                    #### Hard-dependencies:
                    - Will raise an error when they're not found in the initialized `FlarumUser` object. It is impossible for the extension
                    to function without these.

                    #### Soft-dependencies:
                    - Will raise just a warning. It is possible for the extension to function without these, although with limitations
                    (such that some functions might be unavailable).
                '''

                return {
                    "soft": SOFT_DEPENDENCIES,
                    "hard": HARD_DEPENCENDIES
                }


            def mixin(self):
                '''
                    This extends the `FlarumUser` class with features from `ExampleMixin`
                '''

                super().mixin(self, FlarumUser, ExampleMixin)

        ```
    """

    def __init__(self):
        """
            Initializes the `ExtensionMixin` object.
        """

        self.name = "Unknown"
        self.author = "Unknown"
        self.id = "N/A"


    def get_dependencies(self) -> Dict[str, List[object]]:
        """
            Overwrite this method to make your own dependencies.

            This should return the following `dict`:
            ```python
            {
                "hard": [<class>, <class>, ...],
                "soft": [<class>, <class>, ...]
            }
            ```

            #### Hard-dependencies:
            - Will raise an error when they're not found in the initialized `FlarumUser` object. It is impossible for the extension
            to function without these.

            #### Soft-dependencies:
            - Will raise just a warning. It is possible for the extension to function without these, although with limitations
            (such that some functions might be unavailable).
        """

        return {
            "hard": [],
            "soft": []
        }


    def mixin(_, class_to_patch: object, class_to_mix_in: object):
        """
            A boilerplate function for mixing.
            
            This sets/overwrites attributes of `class_to_patch` to attributes of
            `class_to_mix_in` (monkey-patch).

            ### Example:
            ```python
            extension.mixin(myclass, pyflarum_class)
            ```
        """

        for prop, value in vars(class_to_mix_in).items():
            if not prop.startswith('__'):
                setattr(class_to_patch, f'{prop}', value)


# TODO: All included extensions
from .flarum.Flarum_Approval import *
from .flarum.FoF_BestAnswer import *


if __name__ == '__main__':
    print(
        ApprovalDiscussionFromNotificationMixin, ApprovalExtension,
        BestAnswerDiscussionMixin, BestAnswerExtension
    )
