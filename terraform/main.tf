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
