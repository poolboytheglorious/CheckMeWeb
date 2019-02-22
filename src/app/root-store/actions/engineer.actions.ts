import { Action } from '@ngrx/store';
import { Update} from '@ngrx/entity';
import { Engineer } from '../../root-store/models/engineer.model';

export enum EngineerActionTypes {
    LOAD_ENGINEERS = '[Engineer] Load Engineers',
    LOAD_ENGINEERS_SUCCESS = '[Engineer] Load Engineers Success',
    LOAD_ENGINEERS_FAIL = '[Engineer] Load Engineers Fail',


    LOAD_ENGINEER = '[Engineer] Load Engineer',
    LOAD_ENGINEER_SUCCESS = '[Engineer] Load Engineer Success',
    LOAD_ENGINEER_FAIL = '[Engineer] Load Engineer Fail',


    CREATE_ENGINEER = '[Engineer] Create Engineers',
    CREATE_ENGINEER_SUCCESS = '[Engineer] Create Engineers Success',
    CREATE_ENGINEER_FAIL = '[Engineer] Create Engineers Fail',


    UPDATE_ENGINEER = '[Engineer] Update Engineers',
    UPDATE_ENGINEER_SUCCESS = '[Engineer] Update Engineers Success',
    UPDATE_ENGINEER_FAIL = '[Engineer] Update Engineers Fail',

    DELETE_ENGINEER = '[Engineer] Delete Engineers',
    DELETE_ENGINEER_SUCCESS = '[Engineer] Delete Engineers Success',
    DELETE_ENGINEER_FAIL = '[Engineer] Delete Engineers Fail',
}

export class LoadEngineers implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEERS;
}

export class LoadEngineersSuccess implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEERS_SUCCESS;

    constructor(public payload: Engineer[]) {}
}

export class LoadEngineersFail implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEERS_FAIL;

    constructor(public payload: string) {}
}

export class LoadEngineer implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEER;

    constructor(public payload: number) {}
}

export class LoadEngineerSuccess implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEER_SUCCESS;

    constructor(public payload: Engineer) {}
}

export class LoadEngineerFail implements Action {
    readonly type = EngineerActionTypes.LOAD_ENGINEER_FAIL;

    constructor(public payload: string) {}
}

export class CreateEngineer implements Action {
    readonly type = EngineerActionTypes.CREATE_ENGINEER;

    constructor(public payload: Engineer) {}
}

export class CreateEngineerSuccess implements Action {
    readonly type = EngineerActionTypes.CREATE_ENGINEER_SUCCESS;

    constructor(public payload: Engineer) {}
}

export class CreateEngineerFail implements Action {
    readonly type = EngineerActionTypes.CREATE_ENGINEER_FAIL;

    constructor(public payload: string) {}
}

export class UpdateEngineer implements Action {
    readonly type = EngineerActionTypes.UPDATE_ENGINEER;

    constructor(public payload: Update<Engineer>) {}
}

export class UpdateEngineerSuccess implements Action {
    readonly type = EngineerActionTypes.UPDATE_ENGINEER_SUCCESS;

    constructor(public payload: Update<Engineer>) {}
}

export class UpdateEngineerFail implements Action {
    readonly type = EngineerActionTypes.UPDATE_ENGINEER_FAIL;

    constructor(public payload: string) {}
}

export class DeleteEngineer implements Action {
    readonly type = EngineerActionTypes.DELETE_ENGINEER;

    constructor(public payload: number) {}
}

export class DeleteEngineerSuccess implements Action {
    readonly type = EngineerActionTypes.DELETE_ENGINEER_SUCCESS;

    constructor(public payload: number) {}
}

export class DeleteEngineerFail implements Action {
    readonly type = EngineerActionTypes.DELETE_ENGINEER_FAIL;

    constructor(public payload: string) {}
}

export type Action =
|LoadEngineers
|LoadEngineersSuccess
|LoadEngineersFail
|LoadEngineer
|LoadEngineerSuccess
|LoadEngineerFail
|CreateEngineer
|CreateEngineerSuccess
|CreateEngineerFail
|UpdateEngineer
|UpdateEngineerSuccess
|UpdateEngineerFail
|DeleteEngineer
|DeleteEngineerSuccess
|DeleteEngineerFail;

