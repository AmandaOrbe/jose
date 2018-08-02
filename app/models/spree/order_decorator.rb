module Spree
  Order.class_eval do
    def self.complete
      # @order.language = i18n.locale.to_s
      where.not(completed_at: nil)
    end
     # remove_checkout_step :delivery

    def select_default_shipping
      create_proposed_shipments
      shipments.find_each &:update_amounts
      update_totals
    end

  end
end
