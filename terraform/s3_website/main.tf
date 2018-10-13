resource "aws_s3_bucket" "site" {
  bucket = "${var.bucket_name}"
  region = "${var.aws_region}"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}

# data "aws_acm_certificate" "cert" {
#   domain      = "*.${var.root_dns}"
#   statuses    = ["ISSUED"]
#   types       = ["AMAZON_ISSUED"]
#   most_recent = true
# }

# resource "aws_cloudfront_distribution" "distribution" {
#   origin {
#     s3_origin_config {
#       origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path}"
#     }

#     domain_name = "${aws_s3_bucket.site.bucket_regional_domain_name}"
#     origin_id   = "${local.name}"
#   }

#   enabled             = true
#   default_root_object = "index.html"

#   default_cache_behavior {
#     viewer_protocol_policy = "redirect-to-https"
#     compress               = true
#     allowed_methods        = ["GET", "HEAD"]
#     cached_methods         = ["GET", "HEAD"]

#     target_origin_id = "${local.name}"
#     min_ttl          = 0
#     default_ttl      = 86400
#     max_ttl          = 31536000

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }
#   }

#   aliases = ["${local.name}"]

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   viewer_certificate {
#     acm_certificate_arn = "${data.aws_acm_certificate.cert.arn}"
#     ssl_support_method  = "sni-only"
#   }

#   tags = "${var.common_tags}"
# }

# resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {}

# resource "aws_route53_record" "site_alias" {
#   name    = "${local.name}"
#   zone_id = "${var.zone_id}"
#   type    = "A"

#   alias = {
#     name                   = "${aws_cloudfront_distribution.distribution.domain_name}"
#     zone_id                = "${aws_cloudfront_distribution.distribution.hosted_zone_id}"
#     evaluate_target_health = false
#   }
# }
