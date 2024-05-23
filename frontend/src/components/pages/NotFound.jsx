import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-content-center h-100">
                <div className="col-12 col-md-8 col-xxl-6">
                    <Card className="shadow-sm">
                        <p>{t('notFound.notFound')}</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
  
export default NotFound;
