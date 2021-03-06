import { ApplicationKind } from "pipe/pkg/app/web/model/common_pb";
import {
  Application,
  ApplicationSyncStatus,
  ApplicationSyncState,
} from "../modules/applications";
import { dummyEnv } from "./dummy-environment";
import { dummyPiped } from "./dummy-piped";
import { dummyRepo } from "./dummy-repo";

export const dummyApplicationSyncState: ApplicationSyncState.AsObject = {
  headDeploymentId: "deployment-1",
  reason: "",
  shortReason: "",
  status: ApplicationSyncStatus.SYNCED,
  timestamp: 0,
};

export const dummyApplication: Application.AsObject = {
  id: "application-1",
  cloudProvider: "kubernetes-default",
  createdAt: 0,
  disabled: false,
  envId: dummyEnv.id,
  gitPath: {
    configPath: "",
    configFilename: "",
    path: "dir/dir1",
    url: "",
    repo: dummyRepo,
  },
  kind: ApplicationKind.KUBERNETES,
  name: "DemoApp",
  pipedId: dummyPiped.id,
  projectId: "project-1",
  mostRecentlySuccessfulDeployment: {
    deploymentId: "deployment-1",
    completedAt: 0,
    summary: "",
    startedAt: 0,
    version: "v1",
  },
  mostRecentlyTriggeredDeployment: {
    deploymentId: "deployment-1",
    completedAt: 0,
    summary: "",
    startedAt: 0,
    version: "v1",
  },
  syncState: dummyApplicationSyncState,
  updatedAt: 0,
  deletedAt: 0,
  deleted: false,
  deploying: false,
};
