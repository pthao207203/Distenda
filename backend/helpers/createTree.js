let count = 0;

const createTree = (arr, parentId = "") => {
  const tree = [];
  arr.forEach((item) => {
    if (item.CategoryParent_id?.toString() === parentId.toString()) {
      count++;
      const newItem = item;
      newItem.index = count;
      const children = createTree(arr, item._id);
      if (children.length > 0) {
        newItem.children = children;
      }
      tree.push(newItem);
    }
  });
  return tree;
}

module.exports.tree = (arr, parentId = "") => {
  count = 0;
  const tree = createTree(arr, parentId = "")
  return tree
}