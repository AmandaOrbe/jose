module Spree
  Taxon.class_eval do
    extend Mobility
    translates :name,  type: :string, default: " ";
  end


end

