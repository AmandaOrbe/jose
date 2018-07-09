module Spree
  Order.class_eval do
     def self.complete
      @order.language = i18n.locale.to_s
      where.not(completed_at: nil)
    end
  end


end
