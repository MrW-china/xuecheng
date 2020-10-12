package com.xuecheng.framework.domain.cms.request;

import com.xuecheng.framework.model.request.RequestData;
import lombok.Data;


@Data
public class QueryPageRequest extends RequestData {
    private String siteId;

    private  String pageId;

    private String pageName;

    private String pageAliase;

    private String templateId;
}
