# AWS Dynamo DB
resource "aws_dynamodb_table" "users_table" {
  name         = "${terraform.workspace}_users_table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "PK"
  range_key    = "SK"

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  tags = {
    Name = "${terraform.workspace}_users_table"
  }
}
