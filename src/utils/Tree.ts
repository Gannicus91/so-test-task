import TreeNode from '@/utils/TreeNode';
import { DefaultNode } from '@/utils/treeTypes';

export default class Tree {
  private readonly _nodes: Array<TreeNode>

  private readonly _indexedTree: Record<string, TreeNode>

  constructor(nodes: Array<DefaultNode>) {
    this._nodes = nodes.map((el) => new TreeNode(el));
    this._indexedTree = Object.fromEntries(this._nodes.map((el: TreeNode) => [el.id, el]));
    this._nodes.forEach((el: TreeNode) => {
      if (el.parentId === null) {
        return;
      }
      this.findById(el.parentId).addChildren(el);
    });
    this._nodes = this._nodes.filter((el) => el.parentId === null);
  }

  get nodes(): Array<TreeNode> {
    return this._nodes;
  }

  findById(id: number): TreeNode {
    return this._indexedTree[id];
  }
}
