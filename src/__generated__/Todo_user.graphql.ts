/**
 * @generated SignedSource<<895d71d98e57aaa476cb86076909d629>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_user$data = {
  readonly completedCount: number;
  readonly id: string;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "Todo_user";
};
export type Todo_user$key = {
  readonly " $data"?: Todo_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_user",
  "selections": [
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
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "7d4a99e73771e30c8a0ba7cb397430e3";

export default node;
