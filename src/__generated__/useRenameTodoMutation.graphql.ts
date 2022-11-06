/**
 * @generated SignedSource<<4c8cc83aabc8ad85ca32740df5a04829>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {
  clientMutationId?: string | null;
  id: string;
  text: string;
};
export type useRenameTodoMutation$variables = {
  input: RenameTodoInput;
};
export type useRenameTodoMutation$data = {
  readonly renameTodo: {
    readonly todo: {
      readonly id: string;
      readonly text: string;
    };
  } | null;
};
export type useRenameTodoMutation = {
  response: useRenameTodoMutation$data;
  variables: useRenameTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RenameTodoPayload",
    "kind": "LinkedField",
    "name": "renameTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
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
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useRenameTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRenameTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e03f9d02c4f916e7bf2a8ceb7ab58fcd",
    "id": null,
    "metadata": {},
    "name": "useRenameTodoMutation",
    "operationKind": "mutation",
    "text": "mutation useRenameTodoMutation(\n  $input: RenameTodoInput!\n) {\n  renameTodo(input: $input) {\n    todo {\n      id\n      text\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bec01769317f1331bc83080e3dee1883";

export default node;
