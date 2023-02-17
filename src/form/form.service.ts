import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateForm } from './dto/create-form.dto';
import { Form } from './models/form.model';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form)
    private formModel: typeof Form,
  ) {}

  async findAll(): Promise<Form[]> {
    return this.formModel.findAll();
  }

  create(createForm: CreateForm): Promise<Form> {
    const form = new Form();

    form.name = createForm.name;
    form.email = createForm.email;
    form.message = createForm.message;

    return form.save();
  }
}
