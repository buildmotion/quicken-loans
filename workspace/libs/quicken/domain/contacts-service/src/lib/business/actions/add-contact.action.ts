import { BusinessActionBase } from './business-action-base';
import { StringIsNotNullEmptyRange, IsNotNullOrUndefined } from '@valencia/rules-engine';
import { Severity } from '@valencia/logging';
import { ApiResponse } from '@valencia/common';
import { of } from 'rxjs';
import { ContactDto } from '@valencia/quicken/domain/common';

/**
 * Use this action to perform business logic with validation and business rules.
 */
export class AddContactAction<T> extends BusinessActionBase<T> {
  constructor(private contact: ContactDto) {
    super('AddContactAction');
  }

  /**
   * Use the [preValidateAction] to add any business or validation rules that
   * are required to pass in order to perform the action.
   *
   * Use the [ValidationContext] item of the action to add rules. The ValidationContext
   * uses a Fluent API to allow for chained rules to be configured.
   */
  preValidateAction() {}

  /**
   * Use the [performAction] operation to execute the target of the action's business logic. This
   * will only run if the rules and validations are successful.
   */
  performAction() {
    this.loggingService.log(this.actionName, Severity.Information, `Preparing to call API to complete action.`);
    this.response = this.businessProvider.apiService.addContact<T>(this.contact);
  }
}