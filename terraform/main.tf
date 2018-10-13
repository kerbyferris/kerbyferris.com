provider "aws" {
  profile = "${var.AWS_PROFILE}"
  region  = "${var.AWS_REGION}"
}

module "kerbyferris_live" {
  source      = "./s3_website"
  bucket_name = "kerbyferris.com"
  aws_region  = "${var.AWS_REGION}"
  # root_dns  = "${var.root_dns}"
  # zone_id   = "${module.route53.zone_id}"
}

module "kerbyferris_cljs" {
  source      = "./s3_website"
  bucket_name = "cljs.kerbyferris.com"
  aws_region  = "${var.AWS_REGION}"
  # root_dns  = "${var.root_dns}"
  # zone_id   = "${module.route53.zone_id}"
}
