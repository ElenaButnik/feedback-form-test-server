import { ConfigService } from '@nestjs/config';
import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import { EnumConfig } from './enumConfig/enumConfig';
import { Form } from 'src/form/models/form.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [Form],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
