import typing as t



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
    """

    def __init__(self):
        self.name = "Unknown"
        self.author = "Unknown"
        self.id = "N/A"


    def get_dependencies(self) -> t.Dict[str, t.List[object]]:
        """
            This should return the following `dict`:
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
        """

        return {
            "hard": [],
            "soft": []
        }


    def mixin(_, class_to_patch: object, class_to_mix_in: object, skip_protected: bool=True):
        """
            A function to mix-in/merge properties, methods, functions, etc... of one class into another.

            This skips all functions and properties starting with `__` (double underscore), unless `skip_protected` is False.
            
            This sets/overwrites attributes of `class_to_patch` to attributes of
            `class_to_mix_in` (monkey-patch).

            ### Example:
            ```python
            extension.mixin(myclass, pyflarum_class)
            ```
        """

        for prop, value in vars(class_to_mix_in).items():
            if prop.startswith('__') and skip_protected:
                    continue

            setattr(class_to_patch, f'{prop}', value)
