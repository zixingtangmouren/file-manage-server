import { Inject, Injectable } from '@nestjs/common';
import { DbModuleOptions } from './db.module';
import { access, readFile, writeFile } from 'fs/promises';

@Injectable()
export class DbService {
  @Inject('OPTIONS')
  private readonly options: DbModuleOptions;

  async read() {
    try {
      await access(this.options.path);
    } catch (error) {
      return [];
    }

    const result = await readFile(this.options.path, 'utf-8');

    return JSON.parse(result);
  }

  async write(data: any) {
    await writeFile(this.options.path, JSON.stringify(data || []), {
      encoding: 'utf-8',
    });
  }
}
