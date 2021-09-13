import typing as t



class ExtensionMixin:
    """
        A base class for mixing in custom classes (extensions) into another classes.
    """

    def __init__(self):
        self.name = "Unknown"
        self.author = "Unknown"
        self.id = "N/A"


    # TODO: Make this not require `self`, e. g. @classmethod
    def get_dependencies(self) -> t.Dict[str, t.List[object]]:
        """
            This should return the following `dict`:
            ```python
            {
                "hard": [<class>, <class>, ...],
                "soft": [<class>, <class>, ...]
            }
            ```

            A dependency is anything that you can pass into `FlarumUser(extensions=[...])` or `FlarumDatabase(extensions=[...])` (e. g. an extension class).

            #### Hard-dependencies:
            - Will raise an error when they're not found. It is impossible for the extension to function without these.

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
