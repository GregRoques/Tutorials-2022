var script1 = [
  {
    request: "REQ0031348",
    created: "2019-01-29 20:50:15",
    requestedby: "Capstone 99 Cents Only Stores Commerce CA_50117-SMGR",
    Variables: {
      Has_Multi_Room_Occupancy: "false",
      additional_comments: "",
      addtional_comment_pertaining_billing: "",
      city: "Katy",
      contact_prhone_number: "7143655192",
      customer_contact_name: "Ralph Cota",
      customer_contact_phone_number: "213-590-7624",
      customer_direct_mail_address: "",
      customer_email_address: "Ralph.Cota@99only.com",
      dock_type: "all_docks",
      how_often_should_invoice_be_sent: "weekly",
      is_billing_flat_rate_pricing_te_expnese: "flat_rate_pricing",
      lead_associates: "TBD",
      local_travel_team_support: "local_associates",
      management_associates: "1",
      managemnet_rate_weekly_daily: "weekly",
      markup_percentage_airfare: "0_percent",
      markup_percentage_te_expenses: "",
      method_invoice_delivery: "email",
      new_special_project_site_number:
        "This field will be populated after the project is approved.",
      other_skill_set: "",
      partner_name: "397f5987db27d7007a03327e9d961927",
      partner_name_not_listed: "false",
      production_associates: "TBD",
      project_director: "b73c3afcdbedbe40f5873c00ad96197d",
      project_duration: "more_tha_6_weeks",
      project_manager: "David Combee",
      project_manager_phone_number: "(256) 405-8874",
      project_vp: "6a3c76fcdbedbe40f5873c00ad9619d2",
      requester: "04ef787edb48d34018e4dbbb5e96197c",
      required_certifications:
        "767aec89dba4eb007a03327e9d961974,8aaa60c9dba4eb007a03327e9d9619c3,569aec89dba4eb007a03327e9d961934,8a8a2c89dba4eb007a03327e9d961910",
      shipping_address: "23623  Colonial  Pkwy \r\n\r\nKaty, TX 77493",
      site_not_listed: "false",
      site_number_corporate: "58d3bbfcdb4a4f0042783c8f9d9619fb",
      skill_set_two: "1e995131db3c6300794d3e0b7c96195d",
      start_date: "2019-02-04",
      state: "Texas",
      total_associate_daily_fee: "$0",
      total_management_associate_daily_fee: "$0",
      travel_receipts_needed: "",
      u_third_shift_time: "4:00 AM",
      unlisted_partner_name: "",
      unlisted_site_number: "",
      weekly_daily_amount: "$0",
      who_should_receive_invoice:
        "Mayra Teodocio <mayra.teodocio@99only.com>;Ralph.Cota@99only.com;Guillermo Corona <GuillermoC@99only.com>;Monte.perkins@99only.com",
      who_should_receive_weekly_pl:
        "List of Names:\r\n1)Nathan Glumac\r\n2)Kevin Garcia\r\n3)Michael Robles\r\n4)\r\n5)",
      working_days:
        "e7e01a6adb61830042783c8f9d9619a6,62c0926adb61830042783c8f9d961909,50c01a6adb61830042783c8f9d9619e7,b0e0da2adb61830042783c8f9d9619fc,60d0d66adb61830042783c8f9d96197e,26d0926adb61830042783c8f9d9619a4",
    },
  },
];

const sorted1 = Object.keys(script1[0].Variables)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = script1[0].Variables[key];

    return accumulator;
  }, {});

console.log(sorted1);
