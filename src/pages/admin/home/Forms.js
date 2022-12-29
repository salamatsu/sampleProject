import { Button, Upload, Form, Image, Input, Select, message } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { dummyRequest, imagePlaceHolder } from "../../../constants/staticConst";
import { convertToBase64 } from "../../../helpers/tobase64";
import {
  regExp_MobileNumber,
  regExp_Names,
  regExp_Password,
  regExp_Username,
} from "../../../helpers/regex";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { Option } = Select;
const Forms = () => {
  const [form] = Form.useForm();
  const [imagePrev, setImagePrev] = useState("");

  const onFinish = (values) => {
    const { mobileNumber, mobileDropdownPrefix, mobileNumberWithDropdown } =
      values;
    values.mobileNumber = "639" + mobileNumber;
    values.mobileNumberWithDropdown =
      mobileDropdownPrefix + mobileNumberWithDropdown;
    console.log(values);
  };

  ////DRAGGER
  const draggerProps = {
    name: "file",
    multiple: false,
    customRequest: dummyRequest,
    maxCount: 1,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        convertToBase64(info.file?.originFileObj).then((result) => {
          setImagePrev(result);
        });

        form.setFieldsValue({
          imgUrl: info.file?.originFileObj || null,
        });
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      // console.log("Dropped files", e.dataTransfer.files);
    },
    previewFile: (file) => {
      // console.log("UPLOADED", file);
    },
    onRemove: () => {
      setImagePrev("");
    },
  };

  const selectBefore = (
    <Form.Item name="mobileDropdownPrefix" noStyle>
      <Select
        defaultValue="639"
        style={{
          width: 80,
        }}
      >
        <Option value="639">+639</Option>
        <Option value="638">+638</Option>
        <Option value="637">+637</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="p-3">
      <center>
        <h1>FORM VALIDATION</h1>
      </center>
      <div className="w w-3/4">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username (a-Z 0-9)"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                pattern: regExp_Username,
                message: "Invalid character detected",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Name (a-Z)"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
              {
                pattern: regExp_Names,
                message: "Invalid character detected",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="E-mail (example@samle.cpm)"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Mobile Number (digit only) 0-9 minChars:9  maxChars:9"
            name="mobileNumber"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number!",
              },
              {
                pattern: regExp_MobileNumber,
                message: "Invalid character detected",
              },
            ]}
          >
            <Input size="large" prefix="+639" maxLength={9} minLength={9} />
          </Form.Item>

          <Form.Item
            label="Mobile Number With dropdown (digit only) 0-9 minChars:9  maxChars:9"
            name="mobileNumberWithDropdown"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number!",
              },
              {
                pattern: regExp_MobileNumber,
                message: "Invalid character detected",
              },
            ]}
          >
            <Input
              size="large"
              addonBefore={selectBefore}
              maxLength={9}
              minLength={9}
              autoComplete="mobileNumberWithDropdown"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            help={
              <span>
                <ul>
                  <li>Minimum Characters: 6</li>
                  <li>Atleast 1 Digit</li>
                  <li>Atleast 1 Uppercase</li>
                  <li>Atleast 1 Lowercase</li>
                  <li>Atleast 1 Special Character</li>
                </ul>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                pattern: regExp_Password,
                message: "Invalid character detected",
              },
            ]}
          >
            <Input.Password size="large" autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              {
                pattern: regExp_Password,
                message: "Invalid character detected",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password size="large" autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            className="w-full"
            valuePropName="fileList"
            name="imgUrl"
            rules={[
              {
                required: true,
                message: "Please upload an image!",
              },
            ]}
          >
            <ImgCrop
              rotate
              quality={0.3}
              grid={true}
              // aspect={6 / 2}
            >
              <Dragger {...draggerProps}>
                {imagePrev ? (
                  <div>
                    <Image
                      src={imagePrev}
                      fallback={imagePlaceHolder}
                      preview={false}
                    />
                  </div>
                ) : (
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                )}
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Image must be 6/2(aspect ratio) or 2174px / 720px
                </p>
              </Dragger>
            </ImgCrop>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              VALIDATE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Forms;
