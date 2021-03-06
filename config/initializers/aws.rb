attachment_config = {
  s3_credentials: {
    access_key_id:     Rails.application.secrets.aws_access_key_id,
    secret_access_key: Rails.application.secrets.aws_secret_access_key,
    bucket:            Rails.application.secrets.s3_bucket_name
  },

  storage:        :s3,
  s3_headers:     { 'Cache-Control' => 'max-age=31557600' },
  s3_protocol:    'https',
  s3_region:      "eu-west-3",
  url:            ':s3_alias_url',
  s3_host_alias:  Rails.application.secrets.cdn_host,
  bucket:         Rails.application.secrets.s3_bucket_name,

  styles: {
    mini:     '48x48>',
    small:    '100x100>',
    product:  '240x240>',
    large:    '600x600>'
  },

  path:          '/products/:id/:style/:basename.:extension',
  default_url:   'noimage/:style.png',
  default_style: 'product',
}
Aws::VERSION =  Gem.loaded_specs["aws-sdk"].version

attachment_config.each do |key, value|
   Spree::Image.attachment_definitions[:attachment][key.to_sym] = value
end unless Rails.env.test?
