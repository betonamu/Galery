import React, {ReactElement} from 'react';
import {Formik, Form} from 'formik';

import {FormikInitType} from "@common/Models/Formik";

type CustomFormikProps = {
    children?: JSX.Element | JSX.Element[];
    initialValues: FormikInitType<any>;
    onSubmit: any;
    validationSchema: any;
    className?: string;
    id?: string;
    formikRef?: any;
}

const BasicForm: React.FC<CustomFormikProps> = ({
                                                    children,
                                                    initialValues,
                                                    onSubmit,
                                                    validationSchema,
                                                    className,
                                                    id,
                                                    formikRef,
                                                    ...rest
                                                }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        innerRef={formikRef}
        {...rest}>
        {() => (
            <Form id={id} className={className}>
                {children}
            </Form>
        )}
    </Formik>
);

export default BasicForm;
