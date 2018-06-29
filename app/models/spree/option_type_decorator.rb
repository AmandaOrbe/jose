module Spree
  OptionType.class_eval do
    extend Mobility
    translates :presentation,  type: :string, default: " ";
  end


end
