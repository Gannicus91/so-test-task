import { DefaultNode } from '@/utils/treeTypes';

export default class Node implements DefaultNode {
  private readonly _id: number

  private readonly _parentId: number | null

  private _name: string

  private _checked: boolean

  constructor(
    {
      id, parentId, name, checked,
    }: DefaultNode,
  ) {
    this._id = id;
    this._parentId = parentId;
    this._name = name;
    this._checked = checked;
  }

  get id(): number {
    return this._id;
  }

  get parentId(): number | null {
    return this._parentId;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }
}
