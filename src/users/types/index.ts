import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 4 })
  userId: number;

  @ApiProperty({ example: 'R2D2' })
  username: string;

  @ApiProperty({
    example: '$2b$10$uq/9erKhKIxJm.EmRvJXb.DSOUrmISx5IyJsXXERHYe2LBY/fHN0q',
  })
  password: string;

  @ApiProperty({ example: 'starwars@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-05-05T19:42:05.771Z' })
  updateAt: string;

  @ApiProperty({ example: '2023-05-05T19:42:05.771Z' })
  createdAt: string;
}
