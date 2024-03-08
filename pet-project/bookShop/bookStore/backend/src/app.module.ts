import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import  * as path from 'path';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      include: []
    }),
    UsersModule,
    BookModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
