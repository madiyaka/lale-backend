import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsString({message: 'Login must be a string'})
  @MinLength(3, {message: 'Login must be at least 3 characters long'})
  login?: string;

  @IsOptional()
  @IsEmail({}, {message: 'Email must be a valid email'})
  email?: string;

  @IsOptional()
  @IsString({message: 'Password must be a string'})
  @MinLength(6, {message: 'Password must be at least 6 characters long'})
  password?: string;

  @IsOptional()
  @IsString({message: 'Avatar URL must be a string'})
  avatarUrl?: string;

  @IsOptional()
  @IsIn(['ADMIN', 'CLIENT'], {message: 'Invalid role'})
  role?: 'ADMIN' | 'CLIENT';
}
