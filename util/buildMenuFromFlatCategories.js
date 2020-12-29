import treeify from './treeify';
import getDeep from './getDeepBranch';

export default (data) => {
    const tree = treeify(data);

    return tree.map((root) => {
        const depth = getDeep(root);
        if (depth == 1) {
            return {
                text: root.name,
                url: root.id == 0 ? '/' : `/?category=${root.id}`,
            };
        }

        if (depth > 1) {
            return {
                text: root.name,
                url: root.id == 0 ? '/' : `/?category=${root.id}`,
                extraClass: 'menu-item-has-children has-mega-menu',
                subClass: 'sub-menu',
                mega: true,
                megaContent:
                    depth == 2
                        ? [
                              {
                                  heading: root.name,
                                  megaItems: root.children.map((child) => {
                                      return {
                                          text: child.name,
                                          url: `/?category=${child.id}`,
                                      };
                                  }),
                              },
                          ]
                        : root.children.map((child) => {
                              return {
                                  heading: child.name,
                                  megaItems: child.children.map((child3rd) => {
                                      return {
                                          text: child3rd.name,
                                          url: `/?category=${child3rd.id}`,
                                      };
                                  }),
                              };
                          }),
            };
        }
    });
};
