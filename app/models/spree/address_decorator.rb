module Spree
  Address.class_eval do
    self.whitelisted_ransackable_attributes = %w[firstname]

     def full_name
      "#{firstname}".strip
    end
  end


end

