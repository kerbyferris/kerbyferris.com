provider "aws" {
  profile = "${var.AWS_PROFILE}"
  region  = "${var.AWS_REGION}"
}

resource "aws_s3_bucket" "site" {
  bucket = "kerbyferris.com"
  region = "${var.AWS_REGION}"
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

resource "aws_route53_zone" "zone" {
  name    = "kerbyferris.com"
  comment = "kerbyferris.com root DNS"
}

resource "aws_route53_record" "alias" {
  zone_id = "${aws_route53_zone.zone.zone_id}"
  name    = "kerbyferris.com"
  type    = "A"

  alias = {
    name                   = "${aws_s3_bucket.site.website_domain}"
    zone_id                = "${aws_s3_bucket.site.hosted_zone_id}"
    evaluate_target_health = false
  }
}

data "aws_acm_certificate" "cert" {
  domain      = "kerbyferris.com"
  statuses    = ["ISSUED"]
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

resource "aws_cloudfront_distribution" "distribution" {
  origin {
    # s3_origin_config {
    #   origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path}"
    # }

    domain_name = "${aws_s3_bucket.site.bucket_regional_domain_name}"
    origin_id   = "kerbyferris.com"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    target_origin_id = "kerbyferris.com"
    min_ttl          = 0
    default_ttl      = 86400
    max_ttl          = 31536000

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # aliases = ["kerbyferris.com"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.cert.arn}"
    ssl_support_method  = "sni-only"
  }
}

# resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {}
