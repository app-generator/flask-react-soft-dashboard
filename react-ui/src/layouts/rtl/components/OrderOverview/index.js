/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO Material-UI example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          نظرة عامة على الطلبات
        </SuiTypography>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="button" textColor="text" fontWeight="medium">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon className="font-bold text-success">arrow_upward</Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" textColor="text" fontWeight="bold">
              24%
            </SuiTypography>{" "}
            هذا الشهر
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, تغييرات في التصميم"
          dateTime="22 ديسمبر 7:20 مساءً"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="طلب جديد # 1832412"
          dateTime="21 ديسمبر 11 م"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="مدفوعات الخادم لشهر أبريل"
          dateTime="21 ديسمبر 9:34 مساءً"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="تمت إضافة بطاقة جديدة للأمر رقم 4395133"
          dateTime="20 ديسمبر 2:20 صباحًا"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="فتح الحزم من أجل التطوير"
          dateTime="18 ديسمبر ، 4:54 صباحًا"
        />
        <TimelineItem color="dark" icon="paid" title="طلب جديد # 9583120" dateTime="17 ديسمبر" />
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
