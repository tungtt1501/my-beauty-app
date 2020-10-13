import React, { useEffect } from 'react';
import ServiceCatelogy from './ServiceCatelogy'
import { Element } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../DashBoard/Services/ServiceCategorySlice';
import { getAllItem } from '../DashBoard/Services/ServiceItemsSlice';

function ServiceList(props) {

  const dispatch = useDispatch();
  const services = useSelector(state => state.serviceCategory.list);
  const loadingCategoryStatus = useSelector(state => state.serviceCategory.status);

  const allServiceItems = useSelector(state => state.serviceItem.list);
  const loadingServiceItem = useSelector(state => state.serviceItem.status);

  useEffect(() => {
    if (loadingCategoryStatus == 'idle') {
      const fetchAllServicesCategory = async () => {
        try {
          const params = {};
          await dispatch(getAll(params));
        } catch (error) {
          console.log('Failed to fetch category list: ', error);
        }
      }

      fetchAllServicesCategory();
    }
  }, [loadingCategoryStatus, dispatch]);

  useEffect(() => {
    if (loadingServiceItem === 'idle') {
      const fetchAllServicesItem = async () => {
        try {
          const params = {};
          await dispatch(getAllItem(params));
        } catch (error) {
          console.log('Failed to fetch service item list: ', error);
        }
      }

      fetchAllServicesItem();
    }
  }, [loadingServiceItem, dispatch]);

  const showService = (services) => {
    var result = null;
    if (services) {
      result = services.map((service, index) => {
        const serviceItems = allServiceItems.filter(entity => entity.categoryId === service.categoryId);
        return (
          <ServiceCatelogy
            key={index}
            service={service}
            serviceItems={serviceItems} />
        )
      })
    }
    return result;
  }

  return (
    <Element id="services" name="services">
      <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h3 className="subheading">Prestations de service</h3>
              <h2 className="mb-1">Traitements</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex align-items-stretch">
              <div id="accordion" className="myaccordion w-100 text-center py-5 px-1 px-md-4">
                <div>
                  <h3>Des prix</h3>
                  <p>My Beauty Lausanne vous propose des soins ongulaires et corporels de qualité.</p>
                </div>
                {showService(services)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ServiceList;
