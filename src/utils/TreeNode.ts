import Node from '@/utils/Node';
import { DefaultNode } from '@/utils/treeTypes';

export default class TreeNode extends Node {
  private readonly _children: Array<TreeNode>

  constructor({
    id, parentId, name, checked,
  }: DefaultNode, children: Array<TreeNode> = []) {
    super({
      id, parentId, name, checked,
    });
    this._children = children;
  }

  get children(): Array<TreeNode> {
    return this._children;
  }

  get isIndeterminate(): boolean {
    return this.checked && this.hasUncheckedChild() && !this.hasNoCheckedChild();
  }

  addChildren(node: TreeNode): void {
    this._children.push(node);
  }

  hasUncheckedChild(): boolean {
    if (!this._children.length) {
      return false;
    }
    return this._children.some((el) => !el.checked || el.hasUncheckedChild());
  }

  hasNoCheckedChild(): boolean {
    if (!this._children.length) {
      return true;
    }
    return this._children.every((el) => !el.checked && el.hasNoCheckedChild());
  }
}
