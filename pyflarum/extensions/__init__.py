class ExtensionMixin:
    def __init__(self):
        self.name = "Unknown"
        self.author = "Unknown"
        self.id = "N/A"


    def get_dependencies(self):
        """
            Overwrite this method to make your own dependencies.
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
        """

        for prop, value in vars(class_to_mix_in).items():
            if not prop.startswith('__'):
                setattr(class_to_patch, f'{prop}', value)


from .flarum.Flarum_Approval import ApprovalDiscussionNotificationMixin, ApprovalExtension
from .flarum.FoF_BestAnswer import BestAnswerDiscussionMixin, BestAnswerExtension


if __name__ == '__main__':
    print(
        ApprovalDiscussionNotificationMixin, ApprovalExtension,
        BestAnswerDiscussionMixin, BestAnswerExtension
    )
