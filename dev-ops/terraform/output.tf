output "api_gateway_base_url" {
  value = aws_api_gateway_deployment.deployment.invoke_url
}

output "dynamodb" {
  value = aws_dynamodb_table.users_table.name
}

output "aws_region" {
  value = var.AWS_REGION
}
