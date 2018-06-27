module Spree
  Product.class_eval do
    extend Mobility
    translates :name,  type: :string, default: " "
    translates :description,  type: :string, default: " "
    translates :meta_keywords,  type: :string, default: " "
    translates :meta_title,  type: :string, default: " "
    translates :meta_description,  type: :string, default: " "
  end
end
