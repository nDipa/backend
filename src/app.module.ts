import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://Nasiphe:12345@cluster0.9cx3a.mongodb.net/Phonebook?retryWrites=true&w=majority", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

//mongodb+srv://Nasiphe:12345@cluster0.9cx3a.mongodb.net/Phonebook?retryWrites=true&w=majority