import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TeacherBoxSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TeacherBoxSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TeacherBoxSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeacherBoxSharedModule {
  static forRoot() {
    return {
      ngModule: TeacherBoxSharedModule
    };
  }
}
