import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { SubBehReplay } from './rxjs/sub-beh-replay/sub-beh-replay';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    { path: 'login', component: Login, },
    {
        path: '', component: Layout, children: [{ path: 'admin', component: Admin },
        { path: 'control-flow', component: ControlFlow },
        { path: 'data-binding', component: DataBinding },
        { path: 'signal-ex', component: SignalEx },
        { path: 'attr-directive', component: AttDirective },
        { path: 'get-api', component: GetApi },
        { path: 'user', component: User },
        { path: 'reactive-form', component: ReactiveForm },
        { path: 'pipe-ex', component: PipeEx },
        { path: 'resource-api', component: ResourceApi }]
    },
    {
        path: 'sub-beh-replay', component: SubBehReplay
    }


];
