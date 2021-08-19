from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.flarum.core.groups import PreparedGroup


user = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])


if __name__ == "__main__":
    print("All groups:")
    for group in user.get_groups():
        print(f"""
            Singular: {group.nameSingular}
            Plural: {group.namePlural}
            Color: {group.color}
            Icon: {group.icon}
            Hidden: {'yes' if group.isHidden else 'no'}
        """)

    group_to_create = PreparedGroup(user=user, nameSingular="Goomba", icon="fas fa-pastafarianism")
    created = group_to_create.create()

    print(f"""Created:
        Singular: {created.nameSingular}
        Plural: {created.namePlural}
        Color: {created.color}
        Icon: {created.icon}
        Hidden: {'yes' if created.isHidden else 'no'}
    """)
