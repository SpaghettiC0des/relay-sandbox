/**
 * @generated SignedSource<<0fd21451f6d3fb9de5f65145f60faba0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_todo$data = {
  readonly complete: boolean;
  readonly id: string;
  readonly text: string;
  readonly " $fragmentType": "Todo_todo";
};
export type Todo_todo$key = {
  readonly " $data"?: Todo_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "complete",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "1f979eb84ff026fe8a89323dd533d1fc";

export default node;
